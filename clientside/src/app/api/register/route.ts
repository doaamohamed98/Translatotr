// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';


// export async function POST(request:NextRequest) {
//   try {
//     const data = await request.json() as FormData; 
//     console.log(data);
//     return NextResponse.json({ message: 'User registered successfully' },{ status: 201 });
//   } catch (error) {
//     console.error('Registration failed:', error);
//     return NextResponse.json({ message: 'User registration failed' }, { status: 500 });
//   }
// }