import LightGallery from "lightgallery/react";
import React, { useCallback, useEffect, useRef } from "react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgAutoplay from "lightgallery/plugins/autoplay";

import lgRotate from "lightgallery/plugins/rotate";
import fjGallery from "flickr-justified-gallery";
import { Button } from "antd";

export default function GalleryImage() {
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);
  const imageUrls = [
    "/img/prewedding/d67462ef4f942b5613eb987acd1b5f301286a77e.JPG",
    "/img/prewedding/3bd05070e30394775d526f372df41430d11ab751.JPG",
    "/img/prewedding/0a998236513c9ae0d2a69601843d3f5f1a54a043.JPG",
    "/img/prewedding/52ccca541671356009ef18c1bc636d445e2251e9.JPG",
    "/img/prewedding/39001c9bc282096304ab231d127f964b5f3b8405.JPG",
    "/img/prewedding/a1fe264840efe67f98075e9a31785341432c15da.JPG",
    "/img/prewedding/4d4eba6d2ac15b9a50f8820d1b0b4309575fe994.JPG",
    '/img/prewedding/962c329481dafdf1f8ee0c2b1d493130bb21c3f7.jpg',
    "/img/prewedding/fcc740630d9e7fcbef5255f2d1df154b81b45887.JPG",
    '/img/prewedding/7e1dcf43903c17176f037608addb806578c83cab.jpg',
    "/img/prewedding/32e94625e5406b2be976adf8571d70107cc3ea50.JPG",
    "/img/prewedding/083ded5e9d97abcaf8f9ed71facbf9bca8f5331a.JPG",
    "/img/prewedding/5ff93b7268902169893085953e89355174ecf3a6.JPG",
    '/img/prewedding/aa15f8844f5ce7745c580cc75ff0bc61097e0efa.jpg',
    "/img/prewedding/7ac34728329c78436e7dd70db30a44ec93594126.JPG",
    "/img/prewedding/873469753bd6c9d721e1e614aae5322b21f8b9f6.JPG",
    '/img/prewedding/4e8bffcab1efa80fd69a58c8c6cc6cc33abd4249.jpg',
    '/img/prewedding/a63f8390c2fdd1d55725a672911674fd9aee500f.JPG',
    "/img/prewedding/5889320c8ee96c21666088e27df356fb155196e8.JPG",
    "/img/prewedding/a8fff4ec10438ccbc7ec1e327b96580bfb3c508a.JPG",
    "/img/prewedding/3328132987c500ab78645bab6afa5af8a3daa206.JPG",
    "/img/prewedding/2f84a9f2f2cb6383f8711508a240bae2738a1db5.JPG",
    "/img/prewedding/7533f5c010495ab6e437a6b7d69943947647d87e.JPG",
    "/img/prewedding/0e0b17c9335443191623894678596199c540fe2d.JPG",
    "/img/prewedding/95981c1e2d1ef884203acfa9da78c4193f2d6f45.JPG",

    "/img/prewedding/49db06a830da52e7b1e1ab8132cd6f9464e7e952.JPG",
    "/img/prewedding/399efcfc800ef089f9eff00be06868a0d7c51354.JPG",
    "/img/prewedding/289d88fc0277a0ae819c02445ace39bf774fe241.JPG",
    "/img/prewedding/76edab93ac4b0352d5e490ee6f771347a9ae4eae.JPG",
    "/img/prewedding/36b7c6f330aa39b6944f9296646a5ced0521d35a.JPG",

    "/img/prewedding/def61da67c2b35015ad972291fb7cc577e9bef52.JPG",
    "/img/prewedding/c5b2f4275bce6372fb7aeb021b7b57182101933d.JPG",
    "/img/prewedding/8770ac42e17bdb7c08c4c67c5a15fe3f090c8b68.JPG",
    "/img/prewedding/e63416727f2553b3555568e783ffa471d807239a.JPG",
    "/img/prewedding/a644d072fc3997d0cb37658056407a3f6d44796d.JPG",
    "/img/prewedding/72c253a5b2e3308418f00a5ea4ceef0e1c80330a.JPG",
    "/img/prewedding/736fdd0278a4f8ddc3672167971b7e603387e420.JPG",
    "/img/prewedding/f066df3b8abd61d2910a31d2a59a1475b06fe83a.JPG",
    "/img/prewedding/cf3f62b293db35e2c7bf3f1b558a2e1dd3869c20.JPG",
    "/img/prewedding/7558d3edbfab7c9c0f86f291bcc79313730600e2.JPG",

  ]
  useEffect(() => {
    fjGallery(document.querySelectorAll(".fj-gallery"), {
      itemSelector: ".fj-gallery-item",
      rowHeight: "100%",
      // maxRowsCount: 3,
      lastRow: "start",
      // gutter: 2,
      // rowHeightTolerance: 0.1,
      // calculateItemsHeight: false,
    });
  }, []);

  const onOpen = (index) => {
    lightGallery.current.openGallery(index);
  };

  return (
    <div>
      <LightGallery
        onInit={onInit}
        mode="lg-fade"
        elementClassNames={"gallery fj-gallery"}
        rotate={true}
        plugins={[lgZoom, lgThumbnail, lgAutoplay, lgRotate]}
        slideShowInterval={1500}
        dynamic={true}
        zoom={true}
        dynamicEl={
          imageUrls.map((imageUrl) => {
            return {
              iframe: false,
              thumb: imageUrl,
              downloadUrl: imageUrl,
              src: imageUrl,
              download: imageUrl
            }
          })
        }
      >
        <a
          style={{ position: "relative" }}
          onClick={() => onOpen(0)}
          data-lg-size="1600-1067"
          className="gallery__item fj-gallery-item"
          data-index="0"
          data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
        >
          <img
            alt="layers of blue."
            className="img-responsive"
            src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
      </LightGallery>
      <Button
        onClick={() => {
          lightGallery.current.openGallery(0);
        }}
      >
        Xem thêm
      </Button>
    </div>
  );
}
