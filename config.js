// ใส่ค่าจาก Supabase > Project Settings > API
const SUPABASE_URL = "https://cedmpjldgkghznarokic.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hlVsLWghrwDGXDGy0KzbHw_67NUb2BY";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ชื่อผู้ใช้ -> อีเมลภายใน (ผู้ใช้ไม่ต้องรู้)
const toEmail = (u) => u.trim().toLowerCase() + "@app.local";
