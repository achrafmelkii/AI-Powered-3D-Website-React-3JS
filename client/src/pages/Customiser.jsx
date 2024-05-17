import React,{useState,useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage,reader} from '../config/helpers'
import {EditorTabs,FilterTabs,DecalTypes} from '../config/constants'


import {fadeAnimation,slideAnimation} from '../config/motion'

import { AIPicker,ColorPicker,CustomButton,Tab,filepicker  } from '../components'

const Customiser = () => {
  const snap = useSnapshot(state);
  return (
    <animationPresence>
      {!snap.intro &&(
        <>
        costumiser
        
        </>

      )}
    </animationPresence>
  )
}

export default Customiser