import { allPrivateFields } from '@content';
import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import PDF from 'src/components/PDF/PDF';

export async function GET() {

    console.log('allPrivateFields:', allPrivateFields);
    const pdfStream = await renderToBuffer(
        <PDF privateInformation={allPrivateFields} />,
    );

    return new NextResponse(pdfStream, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=resume.pdf'
        },
    });
}
