import { JGSBGROUP, createSBItem, createSBTpl } from '@/sb/JGStoryBook'
import EvenetPopOver from './EvenetPopOver'

export default createSBItem(EvenetPopOver, {
  section: JGSBGROUP.EVENTMANAGEMENT,
  title: 'Evenet PopOver',
})

const tpl = createSBTpl<typeof EvenetPopOver>((args) => {
  return <EvenetPopOver {...args} />
})

export const Basic = tpl.bind({})
Basic.args = {
  startTime: '10:00 AM',
  endTime: '11:00 AM',
  date: 'Monday, 19 February 2024',
  sellHeight: '100px',
}
