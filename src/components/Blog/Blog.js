import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>What is the purpose of React Router??</h1>
      <p>
        Answer: React Router, and dynamic, client-side routing, allows us to
        build a single-page web application with navigation without the page
        refreshing as the user navigates. React Router uses component structure
        to call components, which display the appropriate information. By
        preventing a page refresh, and using Router or Link, which is explained
        in more depth below, the flash of a white screen or blank page is
        prevented. This is one increasingly common way of having a more seamless
        user experience. React router also allows the user to utilize browser
        functionality like the back button and the refresh page while
        maintaining the correct view of the application.
      </p>
      <h1>How does context API works?</h1>
      <p>
        Answer: The React Context API was been around as an experimental feature
        for a while now but finally became safe to use in production last year,
        solving one major problem React problem — prop drilling. In this
        article, Toptal Freelance Javascript Developer Boris Yordanov will
        introduce us to the API and illustrate it with two basic web store apps,
        one built with the Context API and one without it.
      </p>
      <h1>Uses of useRef?</h1>
      <p>
        answer: In a React component, useState and useReducer can cause your
        component to re-render each time there is a call to the update
        functions. In this article, you will find out how to use the useRef()
        hook to keep track of variables without causing re-renders, and how to
        enforce the re-rendering of React Components.
      </p>
    </div>
  );
};

export default Blog;
