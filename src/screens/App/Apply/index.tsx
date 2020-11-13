import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

// Components
import Input from "&components/Input";
import Button from "&components/Button";
import Checkbox from "&components/Checkbox";
import TextArea from "&components/TextArea";

// Styling
import classes from "./ApplyScreen.module.scss";
import urls from "&utils/urls";

const descriptionPlaceholder =
  "Enter a brief description of the type of product you are looking for. It’s okay if you aren’t entirely sure, but this could give us a couple of ideas to discuss with you during our first meeting.";

const ApplyScreen = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [productType, setProductType] = useState([false, false]);
  const [lookingFor, setLookingFor] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [orgPhone, setOrgPhone] = useState("");

  useEffect(() => {
    if (!loading) {
      if (session) {
        setLoggedIn(true);
      } else {
        void router.replace(urls.pages.index);
      }
    }
  }, [router, loading, session]);

  if (loading || !loggedIn) {
    return <h1>Loading...</h1>;
  }

  const checkProductType = (index: number) => {
    const tempProductType = [...productType];
    tempProductType[index] = !tempProductType[index];
    setProductType(tempProductType);
  };

  const submit = () => {
    console.log(
      productType,
      lookingFor,
      contactName,
      contactEmail,
      contactPhone,
      orgPhone
    );
  };

  const saveForLater = () => {
    // TODO: save items
  };

  if (loading) {
    return <h1 className={classes.loadingText}>Loading...</h1>;
  }

  return (
    <div className="applicationPage">
      <div className={classes.root}>
        <div className={classes.sidePadding} />
        <div className={classes.leftCol}>
          <h1 className={classes.formTitle}>Sign up for a Project</h1>
          <h5 className={classes.formDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud commodo consequat.
          </h5>
        </div>
        <div className={classes.padding} />
        <div className={classes.rightCol}>
          <h2 className={classes.sectionHeader}>Product Needs</h2>

          <h5>
            Product Type
            <span className={classes.inline}> (select all that apply)</span>
          </h5>
          <div className={classes.checkboxContainer}>
            <Checkbox
              label="Website"
              checked={productType[0]}
              onClick={() => checkProductType(0)}
            />
            <Checkbox
              label="Mobile App"
              checked={productType[1]}
              onClick={() => checkProductType(1)}
            />
          </div>

          <h5>What You Are Looking For</h5>
          <TextArea
            rows={4}
            value={lookingFor}
            placeholder={descriptionPlaceholder}
            onChange={(event) => setLookingFor(event.target.value)}
          />

          <h2 className={classes.sectionHeader}>Contact Information</h2>

          <h5>Primary Contact</h5>
          <Input
            value={contactName}
            placeholder="Emily Wilson"
            onChange={(event) => setContactName(event.target.value)}
          />

          <h5>Email</h5>
          <Input
            type="email"
            value={contactEmail}
            placeholder="hello@bitsofgood.org"
            onChange={(event) => setContactEmail(event.target.value)}
          />

          <h5>
            Organization Phone Number
            <span className={classes.inline}> optional</span>
          </h5>
          <Input
            type="number"
            value={orgPhone}
            placeholder="(414) 555-0161"
            onChange={(event) => setOrgPhone(event.target.value)}
          />

          <h5>
            Primary Contact Phone Number
            <span className={classes.inline}> optional</span>
          </h5>
          <Input
            type="number"
            value={contactPhone}
            placeholder="(414) 555-0161"
            onChange={(event) => setContactPhone(event.target.value)}
          />

          <div className={classes.buttonContainer}>
            <Button variant="secondary" onClick={saveForLater}>
              <h3>Save for Later</h3>
            </Button>
            <Button
              className={classes.secondButton}
              variant="primary"
              onClick={submit}
            >
              <h3>Apply</h3>
            </Button>
          </div>
        </div>
        <div className={classes.sidePadding} />
      </div>
    </div>
  );
};

export default ApplyScreen;