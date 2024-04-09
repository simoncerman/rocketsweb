// import supabase
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NUXT_SUPABASE_URL, process.env.NUXT_SUPABASE_KEY);



// Register function
async function register(email: string, password: string) {
    // supabase register user
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
}

// Login function
async function login(email: string, password: string) {

}

export { register, login };