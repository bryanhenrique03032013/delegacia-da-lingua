"use server"

import { pool } from "@/lib/db"

export type SavedProgress = {
  playerName: string
  difficulty: string
  score: number
  lives: number
  stationIndex: number
  cluesFound: string[]
  finished: boolean
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function saveProgress(
  emailRaw: string,
  progress: SavedProgress,
): Promise<{ ok: boolean; error?: string }> {
  const email = normalizeEmail(emailRaw)
  if (!isValidEmail(email)) {
    return { ok: false, error: "E-mail inválido." }
  }
  try {
    await pool.query(
      `INSERT INTO dlp_progress (email, player_name, progress, updated_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT (email)
       DO UPDATE SET player_name = EXCLUDED.player_name,
                     progress = EXCLUDED.progress,
                     updated_at = now()`,
      [email, progress.playerName || "", JSON.stringify(progress)],
    )
    return { ok: true }
  } catch (err) {
    console.log("[v0] saveProgress error:", (err as Error).message)
    return { ok: false, error: "Não foi possível salvar agora." }
  }
}

export async function loadProgress(
  emailRaw: string,
): Promise<{ ok: boolean; progress?: SavedProgress; error?: string }> {
  const email = normalizeEmail(emailRaw)
  if (!isValidEmail(email)) {
    return { ok: false, error: "E-mail inválido." }
  }
  try {
    const result = await pool.query(
      `SELECT progress FROM dlp_progress WHERE email = $1 LIMIT 1`,
      [email],
    )
    if (result.rows.length === 0) {
      return { ok: false, error: "Nenhum progresso encontrado para este e-mail." }
    }
    return { ok: true, progress: result.rows[0].progress as SavedProgress }
  } catch (err) {
    console.log("[v0] loadProgress error:", (err as Error).message)
    return { ok: false, error: "Não foi possível carregar agora." }
  }
}
