import React, { useState } from "react";
// import Link from "@/components/utils/Link";
import Image from "next/image";
// import { Modal } from 'react-responsive-modal';
import styles from './test.module.scss';


const WhatInBoxPMax = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

    const tabBackgroundColors = {
      1: "#EFD8E0", // Change this to your desired color
      2: "#E1D1C4", // Change this to your desired color
      3: "#D1C9C2", // Change this to your desired color
      4: "#EFD8E0", // Change this to your desired color
    };
  
    const sectionStyle = {
      background: tabBackgroundColors[ToggleState],
    };

    const tabTextColors = {
      1: "#67263E", // Change this to your desired color
      2: "#7E411C", // Change this to your desired color
      3: "#7A6856", // Change this to your desired color
      4: "#5D6694", // Change this to your desired color
    };
  
    const sectionTextStyle = {
      color: tabTextColors[ToggleState],
      borderColor: tabTextColors[ToggleState],
    };


    const dividerTextColors = {
      1: "yellow", // Change this to your desired color
      2: "#7E411C", // Change this to your desired color
      3: "#7A6856", // Change this to your desired color
      4: "#5D6694", // Change this to your desired color
    };
  
    const dividerTextStyle = {
      borderColor: dividerTextColors[ToggleState],
    };
  
  
    const [openWblend, setOpenWblend] = useState(false);
    const onOpenWblend = () => setOpenWblend(true);
    const onCloseWblend = () => setOpenWblend(false);

    const [openWblendCoffee, setOpenWblendCoffee] = useState(false);
    const onOpenWblendCoffee = () => setOpenWblendCoffee(true);
    const onCloseWblendCoffee = () => setOpenWblendCoffee(false);

    const [openConcentrate, setOpenConcentrate] = useState(false);
    const onOpenConcentrate = () => setOpenConcentrate(true);
    const onCloseConcentrate = () => setOpenConcentrate(false);

    const [openIsolate, setOpenIsolate] = useState(false);
    const onOpenIsolate = () => setOpenIsolate(true);
    const onCloseIsolate = () => setOpenIsolate(false);

    const [openMpowder, setOpenMpowder] = useState(false);
    const onOpenMpowder = () => setOpenMpowder(true);
    const onCloseMpowder = () => setOpenMpowder(false);

    const [openDates, setOpenDates] = useState(false);
    const onOpenDates = () => setOpenDates(true);
    const onCloseDates = () => setOpenDates(false);

    const [openCocoa, setOpenCocoa] = useState(false);
    const onOpenCocoa = () => setOpenCocoa(true);
    const onCloseCocoa = () => setOpenCocoa(false);

    const [openCoffee, setOpenCoffee] = useState(false);
    const onOpenCoffee = () => setOpenCoffee(true);
    const onCloseCoffee = () => setOpenCoffee(false);

    const [openBromelain, setOpenBromelain] = useState(false);
    const onOpenBromelain = () => setOpenBromelain(true);
    const onCloseBromelain = () => setOpenBromelain(false);

    const [openMonkfruit, setOpenMonkfruit] = useState(false);
    const onOpenMonkfruit = () => setOpenMonkfruit(true);
    const onCloseMonkfruit = () => setOpenMonkfruit(false);

    const [openSunflower, setOpenSunflower] = useState(false);
    const onOpenSunflower = () => setOpenSunflower(true);
    const onCloseSunflower = () => setOpenSunflower(false);

  return (
    <section className={styles["pro-powder-sec6"]} style={sectionStyle}>
      {/* <div className={styles["container"]}> */}
        <div className={styles["whats-in-bar-block"]}>
        <h2>Just 7 ingredients</h2>
            {/* <h3 style={sectionTextStyle}>all added upto 100%</h3> */}
            <div className={styles["ul-wraps"]}>
              <ul className={styles["tab-list"]}>
                <li
                  className={`${styles["tabs"]} ${getActiveClass(1, styles["active-tabs"])}`} style={sectionTextStyle} onClick={() => toggleTab(1)}>
                    Light Cocoa
                </li>
                <span className={styles["tabs-divider"]} style={dividerTextStyle}></span>
                <li className={`${styles["tabs"]} ${getActiveClass(2, styles["active-tabs1"])}`} style={sectionTextStyle} onClick={() => toggleTab(2)}>
                    Cold Coffee
                </li>
                <span className={styles["tabs-divider"]} style={dividerTextStyle}></span>
                <li className={`${styles["tabs"]} ${getActiveClass(3, styles["active-tabs2"])}`} style={sectionTextStyle} onClick={() => toggleTab(3)}>
                    Concentrate
                </li>
                <span className={styles["tabs-divider"]} style={dividerTextStyle}></span>
                <li className={`${styles["tabs"]} ${getActiveClass(4, styles["active-tabs3"])}`} style={sectionTextStyle} onClick={() => toggleTab(4)}>
                    Isolate
                </li>
              </ul>
          </div>
          <div className={styles["ingredients-lists-block"]}>
          <div className={`${styles["content"]} ${getActiveClass(1, styles["active-content"])}`}>
            <div className={styles["what-in-box-top"]}>
              <div className={styles["item"]}>
                <div className={styles["image"]}>
                  {/* <Image
                    key=""
                    height="361"
                    width="415"
                    objectFit="cover"
                    src="/static/images/pro-powder-ing1-dsk.png"
                    alt=""
                    loading="eager"
                  /> */}
                </div>
                <div className={styles["text"]}>
                  <div className={styles["ingredients-right"]}>
                  <ul>
                        <li> 
                          <div onClick={onOpenWblend} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          whey protein blend
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          74.9%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenMpowder} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          whole milk powder
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          9%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenDates} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          dates
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          8%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenCocoa} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          cocoa
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          7.4%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenBromelain} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          bromelain
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          0.6%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenMonkfruit} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          monk fruit
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          0.1%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenSunflower} className={styles["ingredient-name"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          sunflower lecithin
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>
                          &#60; 0.1%
                          </div>
                        </li>
                        <li className={`${styles["ingredient-total"]} ${styles["ingredient-total1"]}`} style={{color : "#67263E", backgroundColor : "#EFD8E0"}}>=100%</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["content"]} ${getActiveClass(2, styles["active-content"])}`}>
          <div className={styles["what-in-box-top"]}>
              <div className={styles["item"]}>
                <div className={styles["image"]}>
                  {/* <Image
                    key=""
                    height="361"
                    width="415"
                    objectFit="cover"
                    src="/static/images/pro-powder-ing2-dsk.png"
                    alt=""
                    loading="eager"
                  /> */}
                </div>
                <div className={styles["text"]}>
                  <div className={styles["ingredients-right"]}>
                  <ul>
                        <li> 
                          <div onClick={onOpenWblendCoffee} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          whey protein blend
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          79.1%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenMpowder} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          whey milk powder
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          5.3%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenDates} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          dates
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          9.5%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenCoffee} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          coffee
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          5.4%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenBromelain} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          bromelain
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          0.6%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenMonkfruit} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          monk fruit
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          0.1%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenSunflower} className={styles["ingredient-name"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          sunflower lecithin
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>
                          &#60; 0.1%
                          </div>
                        </li>
                    <li className={`${styles["ingredient-total"]} ${styles["ingredient-total2"]}`} style={{color : "#7E411C", backgroundColor : "#E1D1C4"}}>=100%</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["content"]} ${getActiveClass(3, styles["active-content"])}`}>
          <div className={styles["what-in-box-top"]}>
              <div className={styles["item"]}>
                <div className={styles["image"]}>
                  {/* <Image
                    key=""
                    height="361"
                    width="415"
                    objectFit="cover"
                    src="/static/images/pro-powder-ing3-dsk.png"
                    alt=""
                    loading="eager"
                  /> */}
                </div>
                <div className={styles["text"]}>
                  <div className={styles["ingredients-right"]}>
                  <ul>
                        <li> 
                          <div onClick={onOpenConcentrate} className={styles["ingredient-name"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          whey concentrate
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          99.40%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenBromelain} className={styles["ingredient-name"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          bromelain
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          0.60%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenSunflower} className={styles["ingredient-name"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          sunflower lecithin
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>
                          &#60; 0.1%
                          </div>
                        </li>
                    <li className={`${styles["ingredient-total"]} ${styles["ingredient-total3"]}`} style={{color : "#5D4C3C", backgroundColor : "#D1C9C2"}}>=100%</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["content"]} ${getActiveClass(4, styles["active-content"])}`}>
          <div className={styles["what-in-box-top"]}>
              <div className={styles["item"]}>
                <div className={styles["image"]}>
                  {/* <Image
                    key=""
                    height="361"
                    width="415"
                    objectFit="cover"
                    src="/static/images/pro-powder-ing4-dsk.png"
                    alt=""
                    loading="eager"
                  /> */}
                </div>
                <div className={styles["text"]}>
                  <div className={styles["ingredients-right"]}>
                  <ul>
                        <li> 
                          <div onClick={onOpenIsolate} className={styles["ingredient-name"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          whey isolate
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          99.40%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenBromelain} className={styles["ingredient-name"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          bromelain
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          0.60%
                          </div>
                        </li>
                        <li> 
                          <div onClick={onOpenSunflower} className={styles["ingredient-name"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          sunflower lecithin
                          </div>
                          <div className={styles["ingredient-value"]} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>
                          &#60; 0.1%
                          </div>
                        </li>
                        <li className={`${styles["ingredient-total"]} ${styles["ingredient-total4"]}`} style={{color : "#5D6694", backgroundColor : "#EFD8E0"}}>=100%</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      {/* </div> */}
    {/* //   <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openWblend} onClose={onCloseWblend} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Whey Protein Blend</h3>
    //                     <Image
    //                         key=""
    //                         width="180" 
    //                         height="110"
    //                         objectFit="contain"
    //                         src="/static/images/pro-whey-blend.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                    Blend of Whey Protein Isolate &#40;50%&#41; + Whey Protein Concentrate &#40;24.9%&#41;. With 6.6g BCAA and 12.2g EAA. Protein sourced from Ireland, from one of the largest, most credible manufacturers of whey in the world!
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openWblendCoffee} onClose={onCloseWblendCoffee} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Whey Protein Blend</h3>
    //                     <Image
    //                         key=""
    //                         width="180" 
    //                         height="110"
    //                         objectFit="contain"
    //                         src="/static/images/pro-whey-blend.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                     Blend of Whey Protein Isolate &#40;42.0%&#41; + Whey Protein Concentrate &#40;37.1%&#41;. With 6.4g BCAA and 12.2g EAA. Sourced from Ireland, from one of the largest, most credible manufacturers of whey in the world!
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openConcentrate} onClose={onCloseConcentrate} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Whey Protein Concentrate</h3>
    //                     <Image
    //                         key=""
    //                         width="180" 
    //                         height="110"
    //                         objectFit="contain"
    //                         src="/static/images/pro-whey-blend.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 Sourced from Ireland, from one of the largest, most credible manufacturers of whey in the world!
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openIsolate} onClose={onCloseIsolate} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Whey Protein Isolate</h3>
    //                     <Image
    //                         key=""
    //                         width="180" 
    //                         height="110"
    //                         objectFit="contain"
    //                         src="/static/images/pro-whey-blend.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 Sourced from Ireland, from one of the largest, most credible manufacturers of whey in the world!
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openMpowder} onClose={onCloseMpowder} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Whole Milk Powder</h3>
    //                     <Image
    //                         key=""
    //                         width="160" 
    //                         height="98"
    //                         objectFit="contain"
    //                         src="/static/images/pro-milk-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 100% Whole milk powder.
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openDates} onClose={onCloseDates} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Dates</h3>
    //                     <Image
    //                         key=""
    //                         width="112" 
    //                         height="83"
    //                         objectFit="contain"
    //                         src="/static/images/pro-dates-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 No sugar ever!! Just real, fibrous dates, all the way from Oman
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openCocoa} onClose={onCloseCocoa} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Cocoa</h3>
    //                     <Image
    //                         key=""
    //                         width="154" 
    //                         height="110"
    //                         objectFit="contain"
    //                         src="/static/images/pro-cocoa-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 From Kerala bean to real cocoa, all in-house.
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openBromelain} onClose={onCloseBromelain} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Bromelain</h3>
    //                     <Image
    //                         key=""
    //                         width="119" 
    //                         height="83"
    //                         objectFit="contain"
    //                         src="/static/images/pro-bromelain-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 A natural, digestive enzyme extract derived from the stems of pineapples! This is the ingredient that makes this the most easily digestible protein there is. Makes this easy on your gut.
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openMonkfruit} onClose={onCloseMonkfruit} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Monk fruit</h3>
    //                     <Image
    //                         key=""
    //                         width="126" 
    //                         height="76"
    //                         objectFit="contain"
    //                         src="/static/images/pro-monkf-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 Monk fruit is a zero cal-sweetener, which allows us to achieve a higher protein content, without the additional calories.
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openSunflower} onClose={onCloseSunflower} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Sunflower Lecithin</h3>
    //                     <Image
    //                         key=""
    //                         width="132" 
    //                         height="99"
    //                         objectFit="contain"
    //                         src="/static/images/pro-sunflower-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 Sunflower lecithin is a clean, natural emulsifier that helps you mix your protein powder better and keep your drink smoooth, free of clumps, just as we like it!
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal>

    //     <Modal classNames={{modal: "pro-protine-powder-Modal"}} open={openCoffee} onClose={onCloseCoffee} 
    //         closeOnOverlayClick={false}
    //         propagateSwipe={true}
    //         blockScroll={false}
    //         allowTouchMove={true}
    //         center>
    //         <div className={styles["love-tweet-modal"]}>
    //             <div className={styles["item"]} style={{boxShadow: "-5px 5px 0px 0px #67263E", borderColor:"#67263E", backgroundColor : "#FEF3F1"}}>
    //             <div className={styles["bottom"]}>
    //                     <h3>Coffee</h3>
    //                     <Image
    //                         key=""
    //                         width="160" 
    //                         height="96"
    //                         objectFit="contain"
    //                         src="/static/images/pro-coffeee-powder.png"
    //                         alt=""
    //                         loading="eager"
    //                     />
    //                 </div>
    //                 <p className={styles["item-text"]}>
    //                 100% real coffee. No chicory or any other fillers.
    //                   </p>
    //             </div>
    //         </div>
    //     </Modal> */}
    </section>
  );
};

export default WhatInBoxPMax;