import EvenetPopOver from '../EvenetPopOver/EvenetPopOver'
import Toast from './tost'

type ScheduleListViewProps = {
  month: string
  eventsDays: {
    eventDate: string
    eventDay: string
    events: { date: string; startTime: string; endTime: string; sellHeight?: string }[]
  }[]
}
const ScheduleListView = ({ month, eventsDays }: ScheduleListViewProps) => {
  return (
    <>
      <div className="ring-1 ring-gray-200">
        <div className="bg-white min-h-screen">
          <div className="text-jg-metal-900 text-base font-medium leading-4 bg-gray-50 px-4 py-2 border-b">{month}</div>
          {eventsDays &&
            eventsDays.length > 0 &&
            eventsDays.map((item, i) => (
              <div key={i} className="flex py-2 px-4 space-x-8 border-b">
                <div className="text-center">
                  <div className="text-jg-metal-400 font-medium text-inputSizeXs">{item.eventDay}</div>
                  <div className="text-jg-metal-900 text-base leading-4 font-semibold">{item.eventDate}</div>
                </div>
                {/* <EvenetPopOver events={item.events} /> */}

                <div className="flex space-x-2 w-full">
                  {item.events &&
                    item.events.length > 0 &&
                    item.events.map((event, i) => (
                      <div key={i} className="w-full">
                        <EvenetPopOver startTime="10:00 AM" endTime="11:00 AM" date="Monday, 19 February 2024" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="border p-4">
        <Toast />
      </div>
    </>
  )
}

export default ScheduleListView

// import * as Popover from '@radix-ui/react-popover';
