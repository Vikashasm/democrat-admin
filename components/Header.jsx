import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="header_container">
        <div className="mt_5 pt-3">
          <Image
            className="logo_image"
            src="/small.png"
            width={250}
            height={65}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
