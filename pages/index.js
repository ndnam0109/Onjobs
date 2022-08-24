import sanity from "../lib/sanity";
import Header from "../layouts/Header";
import {StarIcon} from "@heroicons/react/20/solid";
const query = `*[_type == "job"] {
  name,
  skill,
  company,
  location,
  salary
}[0...50]
`;

export default function Home({jobs}) {
  return (
    <>
    <Header />
      <div className=" text-center w-screen p-36 ">
        <h1 className="text-5xl">Web3 Jobs all over the <span className="text-cyan-300">World</span></h1>
        <h3 className="text-2xl mt-6">Browse 519 jobs at 307 Web3 Projects</h3>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-10 rounded-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-2xl">
          <tbody>
          {jobs.map((job, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {job.name}
                </th>
                <td className="py-4 px-6">
                  {job.company}
                </td>
                <td className="py-4 px-6">
                  {job.location}
                </td>
                <td className="py-4 px-6">
                  {job.salary}
                </td>
                <td className="py-4 px-6">
                  {job.skill.map((sk, ind) => (
                      <button key={ind} type="button"
                              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Angular
                      </button>
                  ))}
                </td>
                <td className="py-4 px-6">
                  <StarIcon className="w-6 h-6" />
                </td>
              </tr>

          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const jobs = await sanity.fetch(query)
  console.log(jobs);
  return {
    props: { jobs } // will be passed to the page component as props
  };
};

