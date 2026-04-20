# VedicUrja Admin Panel & Realtime Diagnostic Protocol

## Step 1: SQL Verification (Supabase)
Run the queries in `sql/01_check_permissions.sql` and verify:
- [ ] All content tables are in `supabase_realtime` publication.
- [ ] `anon` and `authenticated` have `SELECT` grants on these tables.
- [ ] RLS policies exist allowing public read of published rows.
- [ ] `is_admin()` function returns correctly.

Then run `sql/02_manual_update_test.sql` (replace section_key if needed) to confirm direct DB update works.

## Step 2: Frontend Console Logging
1. Run `npm run dev`
2. Open browser DevTools (F12) → Console.
3. Navigate to the public homepage.
4. You should see logs:
   - `[useRealtimeContent] 🔄 Fetching home_sections`
   - `[Realtime] subscribeToTable called for home_sections`
   - `[Realtime] ✅ Successfully subscribed to home_sections`
   - `[AcharyaVow] 📊 Data updated: { title: "...", ... }`

If any of these are missing or show errors, note the failure point.

## Step 3: Admin Panel Test
1. Log in as admin, go to Admin Panel → Home tab.
2. Click the **TEST UPDATE** button (blue). This directly updates the Acharya Vow title with a timestamp.
3. Check Console for `Test update result: success` and `refetch` logs.
4. Switch to the public homepage tab. The Acharya Vow title should update within seconds.
5. If not, click the **↻ Refresh** button on the Acharya Vow diagnostic overlay.

## Step 4: Real-time Event Verification
1. In the admin panel, use the normal Edit → Save flow on a home section.
2. Observe Console in both admin and public tabs.
3. In admin: `[Admin] Save successful` and `refetch` called.
4. In public: `[useRealtimeContent] 📡 Realtime event for home_sections - refetching...`
5. Then `[useRealtimeContent] ✅ Fetched home_sections` with updated data.
6. Finally `[AcharyaVow] 📊 Data updated` with new title.

## Step 5: Diagnostic Helpers
In the browser console, you can run:
- `__realtimeStatus()` – shows active realtime subscriptions.
- `__REALTIME_LOG = false` – turn off verbose realtime logs.

## Common Failure Points & Solutions
| Symptom | Likely Cause | Action |
|---------|--------------|--------|
| No `[Realtime]` logs at all | `channelManager` not loaded | Check import in `useRealtimeContent` |
| `CHANNEL_ERROR` or `TIMED_OUT` | Supabase permissions | Run SQL grants (Step 1) |
| Realtime event fires but UI doesn't update | React state not updating | Check `mountedRef` and `setItems` in hook |
| Admin save doesn't persist | RLS blocking UPDATE | Run SQL: `GRANT UPDATE ON home_sections TO authenticated` |
| Test update works but normal edit doesn't | Input binding issue in DataTable | Inspect `handleInputChange` and `editForm` |

## Next Steps After Diagnosis
Based on the console output, we will apply a targeted fix to the specific failing layer.
