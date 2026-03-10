import { NextResponse } from 'next/server';

export const GET = () => {
    return NextResponse.json({
        message: "api is fucking  working",
        status: "success",
    });
};
