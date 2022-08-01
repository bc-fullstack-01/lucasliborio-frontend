import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import server from "../../api/server";
import { CustomContainer } from "../../components/container/container";
import { CustomNavBar } from "../../components/custom-navbar";
import CustomizedSearch from "../../components/search";

interface Profile {
  _id: string,
  username: string,
  followings: string[]
  followers: string[]
  follow: boolean
}
const setFollowOrUnfollow = (profiles: Profile[], actualProfileId: string): Profile[] => {
  return profiles.filter(profile => profile._id !== actualProfileId).map((p) => {
    p.followers.indexOf(actualProfileId) !== -1 ? p.follow = true : p.follow = false
    return p
  })
}

export const ProfilesPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [query, setQuery] = useState<string>('')
  const [follow, setFollow] = useState<boolean>(false)
  const actualProfile = localStorage.getItem('profileId') as string
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    const getProfiles = async () => {
      console.log(query)
      try {
        const response = await server.get(`/profile/search?q=${query}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })

        setProfiles(setFollowOrUnfollow(response.data, actualProfile))

      } catch (error) {

      }
    }
    getProfiles()
  }, [token, query, follow])
  const handleFollow = async (id: string) => {
    try {
      await server.post(`/profile/${id}/follow`, null, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setFollow((f) => !f)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <CustomNavBar title="Profiles" />
      <CustomContainer>
        <Stack
          spacing={3}
          width='100%'>
          <CustomizedSearch onChangeInput={setQuery} />
          <List>
            {profiles && profiles.map(profile => (
              <div key={profile._id}>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar>{profile.username[0].toLocaleUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={profile.username}
                    secondary={<Typography color="text.secondary">{profile.followers.length} Followers</Typography>}
                  />
                </ListItem>
                <div style={{ width: "100%", display: 'flex', marginBottom: '10px', flexDirection: 'row-reverse' }}>
                  {profile.follow ? (<Button onClick={() => handleFollow(profile._id)} variant="contained">Unfollow</Button>) : (<Button onClick={() => handleFollow(profile._id)} variant="contained">Follow</Button>)}
                </div>
                <Divider variant="inset" />
              </div>
            ))}
          </List>

        </Stack>
      </CustomContainer>
    </>
  )
}
