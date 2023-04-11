import {motion} from 'framer-motion'

type Props = {children:React.ReactNode, styles:string}

const MotionDiv = ({children, styles}: Props) => {
  return (
    <motion.div 
    className={styles}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
  >{children}</motion.div>
  )
}

export default MotionDiv