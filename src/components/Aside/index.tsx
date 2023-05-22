import { AiOutlineCompass, AiOutlineHeart, AiOutlineClose, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { BsHouseDoor, BsDownload, BsPeople, BsAlarm } from "react-icons/bs";
import { MdMovie, MdOutlineLogout } from "react-icons/md";
import * as React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuBarAside } from "../../../slice/index";
import { RootState } from "store";
import LinkMenu, { MenuLinksProps } from "../LinkMenu";

export type LinksProps = {
	href: string,
	icon: Icon,
	span: string,
}


export type MenuLinksProps = {
	title: string,
	links: LinksProps[],
}

export default function Aside() {
	const { MenuBarAside } = useSelector((state: RootState) => state.Slice);
	const dispatch = useDispatch();
	const menuLinks: MenuLinksProps = [
		{
			title: "Menu",
			links: [
				{
					href: "/",
					icon: BsHouseDoor,
					span: "Home",
				},

				{
					href: "/discovery",
					icon: AiOutlineCompass,
					span: "Discovery",
				},
        
				{
					href: "/coming-soon",
					icon: BsAlarm,
					span: "Coming Soon",
				},

				{
					href: "/community",
					icon: BsPeople,
					span: "Community",
				},
			]
		},

		{
			title: "Library",
			links: [
				{
					href: "/recents",
					icon: AiOutlineClockCircle,
					span: "Recents",
				},
				{
					href: "/favorites",
					icon: AiOutlineHeart,
					span: "Favorites",
				},
				{
					href: "/top-rated",
					icon: AiOutlineStar,
					span: "Top Rated",
				},
				{
					href: "/downloaded",
					icon: BsDownload,
					span: "Downloaded",
				},
			]
		},

	];

	return (
		<aside className={`${styles[`${MenuBarAside.value}`]} ${styles.aside} enter`}>
			<div className={styles["aside-container"]}>
				<header className={styles.header}>
					<div className={styles["header-title"]}>
						<MdMovie className={styles.icon} onClick={() => dispatch(handleMenuBarAside())} />
						<span translate="no" data-testid="Movies-Aside">Movies</span>
					</div>
          
					<AiOutlineClose
						className={`${styles.closed} ${styles.icon}`}
						onClick={() => dispatch(handleMenuBarAside())}
					/>
				</header>

				<section className={styles["aside-menu"]}>
					<LinkMenu menuLinks={menuLinks} />

				</section>

				<footer className={styles["aside-footer"]}>
					<Link href="/login" className={styles["aside-footer-container"]}>
						<span>Sign in</span>
						<MdOutlineLogout size={18} />
					</Link>
				</footer>
			</div>
		</aside>
	);
}
