import React from "react";
import Heading from "./components/common/heading";
import Button from "./components/common/button";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center h-screen pl-12">
      <div className="w-full max-w-md">
        <Heading
          text="404."
          className="md:text-8xl text-primary mb-2 !font-normal font-helvetica"
        />
        <Heading
          text="This page doesn't exist."
          className="md:text-6xl !font-normal font-helvetica"
        />
        <Button
          link="/"
          className="bg-transparent mt-10 !rounded-full !font-normal border border-outline font-helvetica hover:!bg-primary hover:!text-dark"
          size="large"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
