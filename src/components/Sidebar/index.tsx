import React from "react";

// Libraries
import clsx from "clsx";

// Components
import Link from "next/link";

// Styling
import classes from "./Sidebar.module.scss";

// Utils
import urls, { landingUrls } from "&utils/urls";

interface HeaderProps {
  currentRoute: string;
}

const Sidebar = ({ currentRoute }: HeaderProps) => {
  const problem = urls.pages.index;

  return (
    <div className={classes.root}>
      <h3>MENU</h3>
      <Link href={urls.pages.app.project} passHref>
        <a
          className={clsx(
            classes.page,
            landingUrls.includes(currentRoute) && classes.active
          )}
        >
          <h3
            className={clsx(
              landingUrls.includes(currentRoute) && classes.active
            )}
          >
            Project Application
          </h3>
          {landingUrls.includes(currentRoute) && (
            <span className={classes.rectangle} />
          )}
        </a>
      </Link>

      <Link href={problem} passHref>
        <a
          className={clsx(
            classes.page,
            currentRoute === problem && classes.active
          )}
        >
          <h3>Report a Problem</h3>
          {currentRoute === problem && <span className={classes.rectangle} />}
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;