import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectStatus from './ProjectStatus'
import ProjectMembers from './ProjectMembers'
import MyTasks from './MyTasks'
import {Stack, useRouter} from 'expo-router'
import {Ionicons} from "@expo/vector-icons";


const ProjectDetail = () => {
  const router = useRouter();

  return (
      <>
      <Stack.Screen
          options={{
            title: 'Project Details',
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            ),
            presentation: 'card',
          }}
      />
    <ScrollView>
      <View style={styles.container}>
        <ProjectCard
          title="Store A UI V2"
          date="20/09/2024 - 20/10/2024"
          status="In Progress"
          progress={76}
        />
        <ProjectStatus />
        <ProjectMembers />
        <MyTasks />
      </View>
    </ScrollView>
      </>
  )
}

export default ProjectDetail

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },

})
