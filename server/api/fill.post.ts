import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pckuttdrdjwouycfyisb.supabase.co'
const runtimeConfig = useRuntimeConfig().public;
const supabase = createClient(supabaseUrl, runtimeConfig.supabase.key)

export default defineEventHandler(async (event) => {
    // delete data from table starfox-events before inserting new data
    const { data: dat, error } = await supabase
    .from('starfox-events')
    .delete()
    .eq('project', 'starfox')

    if(error) { console.log(error) 
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    // insert new random data into table starfox-events
    const {data, error: err} = await supabase
    .from('starfox-events')
    .insert([
        {
            title: 'Starfox Event 1',
            description: 'This is the first starfox event',
            date: '2022-01-01',
            project: 'starfox'
        },
        {
            title: 'Starfox Event 2',
            description: 'This is the second starfox event',
            date: '2022-01-02',
            project: 'starfox'

        },
        {
            title: 'Starfox Event 3',
            description: 'This is the third starfox event',
            date: '2022-01-03',
            project: 'starfox'
        }
    ])
    
    if(err) { 
        console.log(err) 
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }  
})