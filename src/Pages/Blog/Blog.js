import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h4 className='font-bold py-3'>Q.Difference between SQL and NoSQL?</h4>
            <div className="overflow-x-auto text-center">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NoSQL</th>
                            <th>SQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>NoSQL databases have dynamic schemas for unstructured data.</td>
                            <td>SQL databases use structured query language and have a predefined schema.</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                            <td>SQL databases are table-based</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>NoSQL databases are non-relational.</td>
                            <td>SQL databases are relational</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>NoSQL databases are horizontally scalable</td>
                            <td>SQL databases are vertically scalable</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>NoSQL databases are primarily called as Non-relational or distributed database</td>
                            <td>SQL databases are primarily called RDBMS or Relational Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4 className='font-bold py-3'>Q. What is JWT, and how does it work?</h4>
            <p>Ans: JWT is a web token and open standard used to share security information between client and a server-side. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>
            <h4 className='font-bold py-3'>Q. What is the difference between javascript and NodeJS?</h4>
            <div className="overflow-x-auto text-center">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Javascript </th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>JavaScript is a client-side scripting language</td>
                            <td>Node.js is an open-source, cross-platform, back-end JavaScript runtime that runs on a JavaScript Engine</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed</td>
                            <td> Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Javascript most commonly used on client-side servers.</td>
                            <td>Node.js mainly popular on the server-side.</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Javascript made for creating network-centric apps.</td>
                            <td>Node.js made for real-time data-intensive apps that run on multiple platforms.</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>We can only run Javascript on browsers.</td>
                            <td>NodeJS helps us run JS outside the browser as well.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4 className="font-bold py-3">Q. How does NodeJS handle multiple requests at the same time?</h4>
            <p>We know NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.NodeJS receives multiple client requests and places them into EventQueue. Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.</p>
        </div>
    );
};

export default Blog;