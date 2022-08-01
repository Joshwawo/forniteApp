import React from 'react'

const Comparador = ({children}) => {
  return (
    <span>
        {children == "Epic" ? (
                              <span className="text-purple-500">Epic</span>
                            ) : children == "Rare" ? (
                              <span className="text-blue-500"> Rare</span>
                            ) : children == "Uncommon" ? (
                              <span className="text-green-500 "> Uncommon</span>
                            ) : children == "Icon Series" ? (
                              <span className="text-cyan-500">Icon Series</span>
                            ) : children == "MARVEL SERIES" ? (
                              <span className="text-red-5s00">
                                Marvel Series
                              </span>
                            ) : (
                              ""
                            )}
    </span>
  )
}

export default Comparador