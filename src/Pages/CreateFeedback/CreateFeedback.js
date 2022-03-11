import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  SelectorIcon,
  PlusIcon,
  ArrowLeftIcon
} from '@heroicons/react/solid'
import { classNames } from '../../utils/index'
import { Link } from 'react-router-dom'

function CreateFeedback() {
  const categories = [
    { id: 1, name: 'UI' },
    { id: 2, name: 'UX' },
    { id: 3, name: 'Enchancement' },
    { id: 4, name: 'Bug' },
    { id: 5, name: 'Feature' }
  ]
  const [selected, setSelected] = useState(categories[0])
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      'selected =>',
      selected,
      'title =>',
      title,
      'details =>',
      details
    )
  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center items-center bg-gray-200   ">
        <Link to="/">
          <div className="back my-10  text-center font-extrabold text-xl flex justify-center items-center transition ease-in-out duration-500 hover:underline hover:cursor-pointer hover:translate-y-1 hover:text-fuchsia-600 ">
            <ArrowLeftIcon className="w-5 h-5 mr-3" />
            <span>Go back</span>
          </div>
        </Link>

        <div className="form bg-white py-5 px-10 rounded-2xl shadow-lg relative">
          <div className="svg absolute -top-7 left-10  bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-16 w-16 flex justify-center items-center ">
            <PlusIcon className="w-7 h-7 text-white" />
          </div>
          <h1 className="mb-7 mt-7">Create New Feedback</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 -mb-1 my-10"
              >
                Feedback Title
              </label>
              <small>Add a short, descriptive headline</small>
              <div className="mt-1">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  id="title"
                  className="shadow-sm bg-zinc-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md transition ease-in duration-300"
                />
              </div>
            </div>
            <div className="my-10">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700  -mb-1">
                      Category
                    </Listbox.Label>
                    <small className="">
                      Choose a category for your feedback
                    </small>
                    <div className="mt-1 relative">
                      <Listbox.Button className="transition ease-in duration-300 bg-zinc-100 relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-200"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {categories.map((category) => (
                            <Listbox.Option
                              key={category.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'text-white bg-indigo-600'
                                    : 'text-gray-900',
                                  'cursor-default select-none relative py-2 pl-3 pr-9 bg-zinc-100 hover:bg-white text-black'
                                )
                              }
                              value={category}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate'
                                    )}
                                  >
                                    {category.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <div className="my-10">
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 -mb-1"
              >
                Feedback Detail
              </label>
              <small>
                Include any specific comments on what should be improved, added,
                etc.
              </small>
              <div className="mt-1">
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  name="details"
                  id="details"
                  className="transition ease-in duration-300 bg-zinc-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="my-10 flex justify-end items-start">
              <button
                type="button"
                className="mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateFeedback
