import React, { Key } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { LinksProps, MenuLinksProps } from "../Aside";

type LinkMenuProps = {
    menuLinks: MenuLinksProps[],
}

export default function LinkMenu({ menuLinks }: LinkMenuProps[]){
	const { MenuBarAside } = useSelector((state: RootState) => state.Slice);

	return(
		<>
			{menuLinks.map((linkMenu: MenuLinksProps, index: Key) => (
				<div className={`${styles["aside-menu-container"]} ${styles[`${MenuBarAside.value}`]}`} key={index}>
					<h2 translate="no" >{linkMenu.title}</h2>
					{linkMenu.links.map((menu: LinksProps, index: Key) => (
						<ul className={styles.ul} key={index}>
							<Link href={`${menu.href}`} className={styles["menu-dashboard"]}>
								<menu.icon size={18} />
								<li>{menu.span}</li>
							</Link>
						</ul>
					))}
				</div>
			))}
			
			<div className={`${styles["aside-menu-container"]} ${styles[`${MenuBarAside.value}`]}`}>
				<ul className={styles.ul}>
					<div className={styles["menu-dashboard"]}>
						<AiOutlineSetting size={18} />
						<li>Settings</li>
					</div>
					<div className={styles["menu-dashboard"]}>
						<BiHelpCircle size={18} />
						<li>Help</li>
					</div>
				</ul>
			</div>
		</>
	);
}