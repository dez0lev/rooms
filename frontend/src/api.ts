export const API_BASE =
  location.hostname === "dez0lev.github.io"
    ? "https://rooms-r8lo.onrender.com"
    : "";

export async function createRoom(body: {
  number: string;
  name: string;
  capacity: number;
  description?: string | null;
}) {
  const res = await fetch(`${API_BASE}/api/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      msg = data?.message ?? msg;
    } catch {}
    throw new Error(msg);
  }

  return res.json();
}

export type Room = {
  id: string;
  number: string;
  name: string;
  capacity: number;
  description: string | null;
  createdAt: string;
};

export async function getRooms(): Promise<Room[]> {
  const res = await fetch("/api/rooms");

  return res.json();
}

export async function createBooking(body: {
  eventName: string;
  eventType: string;
  subject?: string | null;
  organizerName: string;
  roomId: string;
  backupRoomId?: string | null;
  startsAt: string;
  endsAt: string;
}) {
  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json();
}

export async function updateBooking(
  id: string,
  body: {
    eventName: string;
    eventType: string;
    subject?: string | null;
    organizerName: string;
    roomId: string;
    backupRoomId?: string | null;
    startsAt: string;
    endsAt: string;
  },
) {
  const res = await fetch(`/api/bookings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message ?? "Не удалось обновить бронирование");
  }

  return res.json();
}

export async function deleteBooking(id: string) {
  const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });

  if (!res.ok) {
    const text = await res.text();
    let msg = `HTTP ${res.status}`;
    try {
      const data = JSON.parse(text);
      msg = data?.message ?? msg;
    } catch {
      if (text) msg = text;
    }
    throw new Error(msg);
  }
}
