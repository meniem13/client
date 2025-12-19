import mysql from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "centerbeam.proxy.rlwy.net",
      port: 17952,
      user: "root",
      password: "RlOTjXcZeQbQfzDQImqIcvTJUgxxjljQ",
      database: "railway",
    });

    const [rows] = await connection.execute("SELECT * FROM meniem");

    return new Response(JSON.stringify(rows), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // allow all origins
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
