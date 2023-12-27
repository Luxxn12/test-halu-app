"use client"
import HiHome, { HiOutlineStar, HiOutlineTag, HiOutlineTemplate } from "react-icons/hi"
import HiOutlineClipboardDocumentList from "react-icons/hi"
export const DataMobile = [
    {
        key: "1",
        link: "/",
        icon: HiHome,
        label: "Home"
    },
    {
        key: "2",
        link: "/guests",
        icon: HiOutlineStar,
        label: "Guests"
    },
    {
        key: "3",
        link: "/rundown",
        icon: HiOutlineClipboardDocumentList,
        label: "Rundown"
    },
    {
        key: "4",
        link: "/tenants",
        icon: HiOutlineTemplate,
        label: "Tenants"
    },
    {
        key: "5",
        link: "/promo",
        icon: HiOutlineTag,
        label: "Promo"
    },
]