import './globals.css'


export const metadata = {
  title: {
    default: 'Zenversee | Coming Soon',
    template: '%s',
  },
  description: 'Unlock the power of innovation with Zenversee, a leading software development agency. Explore our range of cutting-edge SaaS products and discover tailored marketing solutions to elevate your business. Stay tuned as we prepare to launch our website, bringing you groundbreaking technology and results-driven strategies for success.',
  keywords: ['zenversee','software developement agency','social media marketing agency','digital marketing','saas products'],
  creator: 'Zenversee',
  robots:{
    googleBot:{
      index: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
