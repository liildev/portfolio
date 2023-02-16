const cvMeta = () => {
  return { title: "Resume", description: "Liil Dev's resume" };
};

const workMeta = () => {
  return { title: "Work", description: "Some things I've built" };
};

const homeMeta = () => {
  return { description: "Software Developer" };
};

const aboutMeta = () => {
  return { title: "About", description: "All information about Liil Dev" };
};

const contactMeta = () => {
  return {
    title: "Contact",
    description:
      "I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge",
  };
};

export { cvMeta, workMeta, homeMeta, aboutMeta, contactMeta };
