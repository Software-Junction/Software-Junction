import React from 'react'
import Kizeo from '../src/components/agriculture-software/kizeo/index'
const kizeo = () => {
    let schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "software bazaar",
        "url": "https://www.software-bazaar.com",
        "logo": "https://admin.thewholetruthfoods.com/wp/wp-content/uploads/2021/01/logo-top.svg",
        "founder": "adin ansari",
        "foundingDate": "2023",
        "foundingLocation": "Mumbai",
        "sameAs": [
          "https://www.facebook.com/",
          "https://twitter.com/",
          "https://www.instagram.com/",
          "https://www.youtube.com/channel/"
        ]
      }
  return (
    <>
      {/* <NextSeo title="qirah" description="qirah" canonical="/" /> */}
      {/* <SeoSchema data={schemaData} /> */}
      <Kizeo/>
    </>
  )
}

export default kizeo
