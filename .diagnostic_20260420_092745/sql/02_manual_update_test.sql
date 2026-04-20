-- =============================================================================
-- MANUAL UPDATE TEST – SIMULATE ADMIN SAVE
-- =============================================================================
-- Replace 'YOUR_SECTION_ID' with an actual id from home_sections.
-- Run this to see if direct update works.

UPDATE home_sections 
SET title = 'TEST UPDATE ' || NOW() 
WHERE section_key = 'acharya_vow' 
RETURNING *;
