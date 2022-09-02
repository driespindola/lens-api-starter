import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client, getProfileById } from "../../api";

export default function Profile() {
    const [profile, setProfile] = useState()
    
    useEffect(() => {
        if (id) {
          fetchProfile();
        }
    }, [id]);
       
    async function fetchProfile(){
        try {
          const response = await client.query(getProfileById, { id }).toPromise();
          console.log("PROFILE:", response);
        } catch(error) {
          console.log("ERROR:", error);
        }
    }
    
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            ID: {id}
        </div>
    );
}