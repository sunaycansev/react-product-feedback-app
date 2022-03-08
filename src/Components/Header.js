import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '../utils'
import {
  ChevronDownIcon,
  PlusIcon,
  UserCircleIcon
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function Header() {
  const [sortOption, setSortOption] = useState('Most Upvotes')

  return (
    <>
      <div className="w-full h-20 bg-slate-700 rounded-2xl flex items-center justify-between">
        <div className="left-bar flex justify-between items-center">
          <div className="suggestion flex justify-between items-center text-white mr-5">
            <svg
              className="m-5"
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M260.352 8.924L238.037 59.98c-42.626 4.47-81.168 22.782-111.04 50.36l-16.64-16.64-13.214 13.216 16.744 16.744c-26.084 29.167-43.485 66.252-48.117 107.174L17.826 251.79l47.717 20.853c4.285 42.03 22.02 80.115 48.836 109.87L97.144 399.75l13.214 13.215 17.18-17.18c30.096 27.574 68.902 45.784 111.78 49.992l21.034 48.125 21.224-48.558c40.46-4.83 77.114-22.153 106.002-47.988l15.61 15.61 13.214-13.216-15.504-15.504c27.326-29.6 45.554-67.712 50.235-109.875l51.666-22.583-51.907-22.687c-5.02-41.053-22.904-78.167-49.49-107.184l15-15L403.19 93.7l-15.055 15.056c-28.666-25.833-65.062-43.238-105.266-48.31L260.35 8.923zM238.9 78.676l21.452 49.078 21.26-48.64c35.623 4.698 67.85 20.064 93.368 42.796l-18.664 18.664c4.716 4.08 9.17 8.457 13.342 13.088l18.606-18.605c23.548 25.954 39.397 59.022 43.996 95.625l-48.287 21.105 48.52 21.207c-4.306 37.634-20.492 71.617-44.733 98.11l-17.45-17.452c-4.145 4.66-8.575 9.057-13.263 13.168l17.38 17.38c-25.155 22.216-56.75 37.313-91.66 42.152l-22.413-51.282-22.618 51.746c-37.173-4.36-70.762-20.32-97.054-44.175l17.172-17.17c-4.632-4.175-9.005-8.63-13.086-13.345l-17.235 17.234c-23.037-25.86-38.51-58.61-42.978-94.8l52.1-22.77-51.852-22.663c4.74-35.168 19.882-67 42.238-92.313l18.374 18.374c4.112-4.69 8.51-9.116 13.17-13.26l-18.45-18.45c26.647-24.38 60.872-40.61 98.766-44.802zm22.555 69.2c-58.85 0-106.355 47.504-106.355 106.353 0 58.847 47.506 106.354 106.355 106.354 58.85 0 106.356-47.507 106.356-106.355 0-58.85-47.506-106.355-106.355-106.355zm-1.596 41.235c6.653 0 13.077 1.015 19.13 2.89-9.224 1.827-16.944 7.813-21.138 15.924-24.378 1.245-43.942 21.578-43.942 46.25 0 25.466 20.844 46.312 46.31 46.312 25.467 0 46.313-20.846 46.313-46.312 0-3.337-.365-6.59-1.045-9.733 6.114-5.575 9.95-13.606 9.95-22.534 0-.49-.015-.977-.038-1.46 5.98 9.822 9.43 21.34 9.43 33.634 0 35.772-29.2 64.97-64.97 64.97-35.772 0-64.97-29.198-64.97-64.97s29.198-64.97 64.97-64.97zm-4.964 37.95c2.45 14.385 14.968 25.34 30.05 25.34.953 0 1.896-.05 2.827-.136.043.63.07 1.267.07 1.91 0 15.366-12.256 27.623-27.622 27.623s-27.62-12.257-27.62-27.623c0-13.542 9.52-24.663 22.296-27.113z"></path>
            </svg>
            3 Suggestion
          </div>
          <div className="filter flex items-center m-3 text-white">
            <div>Sort By : </div>

            <Menu as="div" className="relative inline-block text-left ml-1">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md   shadow-sm px-4 py-2 bg-slate-700 text-sm font-medium text-white  focus:outline-none ">
                  {sortOption}
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setSortOption('Most Upvotes')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm hover:cursor-pointer'
                          )}
                        >
                          Most Upvotes
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setSortOption('Least Upvotes')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm hover:cursor-pointer'
                          )}
                        >
                          Least Upvotes
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setSortOption('Most Comments')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm hover:cursor-pointer'
                          )}
                        >
                          Most Comments
                        </div>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => setSortOption('Least Comments')}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full text-left px-4 py-2 text-sm hover:cursor-pointer'
                            )}
                          >
                            Least Comments
                          </div>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="right-bar flex justify-between items-center">
          <div className="add-feedback mr-5 ">
            <Link
              to="/"
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-violet-800 hover:bg-violet-600 focus:outline-none transition ease-in-out duration-300 "
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Feedback
            </Link>
          </div>
          <div className="login mr-5">
            <Link to="/login">
              <UserCircleIcon
                className="-mr-1 ml-2 h-8 w-8 text-gray-300 hover:cursor-pointer hover:text-gray-200 transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
