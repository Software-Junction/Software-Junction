import React from 'react'
import Clinisys from '../src/components/clinic-management/clinisys/index'
const clinisys = () => {
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
      <Clinisys/>
    </>
  )
}

export default clinisys
