import classNames from "classnames/bind";
import Link from "next/link";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import { useResponsive } from "../../shared/hooks";
import * as types from "../../shared/types";
import { getEvents, handleTargetClick } from "./dropdownHelpers";
import styles from "./Dropdown.module.scss";

interface Props {
  name: string;
  path: string;
  items: types.MenuItem[];
}

const cx = classNames.bind(styles);

export function Dropdown({ name, path, items }: Props) {
  const [listActive, setListActive] = useState(false);
  const ref = useOnclickOutside(() => setListActive(false));
  const { isMobile } = useResponsive();

  return (
    <div
      className={styles.wrapper}
      ref={ref}
      {...getEvents({ isMobile, setListActive })}
    >
      <Link href={path}>
        <a
          className={styles.target}
          onClick={(event) =>
            handleTargetClick({ event, isMobile, setListActive })
          }
        >
          <span className={styles.name}>{name}</span>
        </a>
      </Link>

      <ul className={cx("list", { active: listActive })}>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <a className={styles.link} onClick={() => setListActive(false)}>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
