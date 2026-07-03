import { NextResponse } from "next/server";

/**
 * Reservation request endpoint.
 *
 * Validates the enquiry and returns a reference. In production, forward
 * the payload to the booking system (ResDiary / SevenRooms / OpenTable)
 * or the reservations inbox — the integration point is marked below.
 */

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  guests?: string;
  occasion?: string;
};

function bad(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid request.");
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const date = body.date ?? "";
  const time = body.time ?? "";
  const guests = Number(body.guests);

  if (name.length < 2 || name.length > 100) {
    return bad("Please tell us your name.");
  }
  if (!/^[+()\d\s-]{7,20}$/.test(phone)) {
    return bad("Please enter a valid phone number.");
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad("Please enter a valid email address.");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
    return bad("Please choose a date.");
  }
  const today = new Date().toISOString().slice(0, 10);
  if (date < today) {
    return bad("Please choose a date in the future.");
  }
  if (!/^\d{2}:\d{2}$/.test(time)) {
    return bad("Please choose a time.");
  }
  if (!Number.isInteger(guests) || guests < 1 || guests > 12) {
    return bad("For parties of this size, please call us.");
  }

  const reference = `CT-${Date.now().toString(36).slice(-4).toUpperCase()}${Math.floor(
    Math.random() * 90 + 10,
  )}`;

  // ── Integration point ────────────────────────────────────────────────
  // await forwardToBookingSystem({ ...body, reference });
  // e.g. POST to ResDiary API, or transactional email to the restaurant.
  console.log("[reservation]", reference, {
    name,
    phone,
    email,
    date,
    time,
    guests,
    occasion: body.occasion?.slice(0, 200),
  });
  // ─────────────────────────────────────────────────────────────────────

  return NextResponse.json({ reference });
}
