import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import React from 'react';

export const metadata: Metadata = {
    title: 'Social-Network',
    description: 'Zone01 Social-Network project',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
