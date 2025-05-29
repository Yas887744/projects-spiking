import {createClient} from '@supabase/supabase-js';
import { supabaseKey, supabaseUrl } from './config';


export async function getCategories() {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('categories')
      .select('name');

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}