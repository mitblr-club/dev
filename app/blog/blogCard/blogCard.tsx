import data from './data';

import { 
Card,
CardHeader,
CardTitle,
CardContent,
CardFooter} from '@/components/ui/card';

import Link from 'next/link';


export default function BlogCard() {

    const descLength:number = 100
    const titleLength:number = 40

    return(

        <div className="mt-c15 md:mt-c5 xl:mt-c3 ">
            
        <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-3'>

            {data.map( (item:any,index:number) => {
                
                let hiddenDescText:string = ''

                if(item.description.length > descLength){
                    item.description = item.description.substring(0,descLength-3) + '...'
                }
                else{
                    hiddenDescText = '* '.repeat((descLength - item.description.length)/2)
                }

                let hiddenTitleText:string = ''

                if(item.title.length > titleLength){
                    item.title = item.title.substring(0,titleLength-3) + '...'
                }
                else{
                    hiddenTitleText = '* '.repeat((titleLength - item.title.length)/2)
                }

                return(

                    <div key={index} className="mt-c5">
                        <Link href="/">
                        <Card className="flex flex-col w-c80 md:w-c40 xl:w-c25 h-fit hover:border-primary focus:border-primary">
                            <CardHeader>
                                <div className="text-md font-light dark:font-extralight">{item.date}</div>
                                <CardTitle>
                                    <div className="text-2xl font-bold">{item.title}<span className='invisible'>{hiddenTitleText}</span></div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm font-medium dark:font-light h-fit overflow-clip">{item.description} <span className='invisible'>{hiddenDescText}</span></div>
                            </CardContent>
                            <CardFooter className='flex flex-col gap-3'>
                                <div className="text-md font-medium dark:font-light">{item.author}</div>
                            </CardFooter>
                        </Card>
                        </Link>
                    </div>
                )

            })}

        </div>

        </div>

    )

}