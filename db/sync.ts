import { synchronize } from "@nozbe/watermelondb/sync";
import database from ".";
import { supabase } from "@/lib/supabase";

const mySync = async () => {
  await synchronize({
    database,
    sendCreatedAsUpdated: true,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      console.log("pulling data");
      const { data, error } = await supabase.rpc("pull", {
        last_pulled_at: lastPulledAt,
        schemaversion: schemaVersion,
        migration: migration,
      });
      console.log(error);
      console.log(data);
      // sync with supabase
      return { changes: data.changes, timestamp: data.timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      console.log("pushing data");

      const { error } = await supabase.rpc("push", { changes });

      console.log(changes);
      // push changes to supabase
      return;
    },
  });
  return;
};

export default mySync;
