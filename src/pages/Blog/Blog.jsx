import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
            or Relational Databases, whereas NoSQL is a Non-relational or
            Distributed Database. Comparing SQL vs NoSQL databases, SQL
            databases are table-based databases, whereas NoSQL databases can be
            document-based, key-value pairs, and graph databases. SQL databases
            are vertically scalable, while NoSQL databases are horizontally
            scalable. SQL databases have a predefined schema, whereas NoSQL
            databases use a dynamic schema for unstructured data. Comparing
            NoSQL vs SQL performance, SQL requires specialized DB hardware for
            better performance while NoSQL uses commodity hardware.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT and how does it works?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties
            involved.The purpose of using JWT is not to hide data but to ensure
            the authenticity of the data. JWT is signed and encoded, not
            encryptedJWT is a token based stateless authentication mechanism.
            Since it is a client-side based stateless session, server doesn't
            have to completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a high-level programming language that makes our web
            pages and web applications dynamic and interactive by giving them
            the ability to think and act. JavaScript is a lightweight (easy to
            learn syntax) and object-oriented programming language whereas
            Node.js is a runtime environment built on google v8 engine and
            typically used to represent a list of objects and functions that
            JavaScript programs can access.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            We know NodeJS application is single-threaded. Say, if processing
            involves request A that takes 10 seconds, it does not mean that a
            request which comes after this request needs to wait 10 seconds to
            start processing because NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded.NodeJS receives multiple client requests and places
            them into EventQueue. NodeJS is built with the concept of
            event-driven architecture. NodeJS has its own EventLoop which is an
            infinite loop that receives requests and processes them. EventLoop
            is the listener for the EventQueue.If NodeJS can process the request
            without I/O blocking then the event loop would itself process the
            request and sends the response back to the client by itself. But, it
            is possible to process multiple requests parallelly using the NodeJS
            cluster module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
