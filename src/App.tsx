import { motion } from 'framer-motion'

function App() {
  return (
    <div className=" h-dvh w-dvw bg-blue-400">
      <motion.div
        className=" flex items-center justify-center rounded-b-xl bg-red-500 text-2xl"
        initial={{
          height: '100%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        animate={{
          height: '60%',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: 'easeInOut',
        }}
      >
        teste
      </motion.div>
      teste fora
    </div>
  )
}

export default App
