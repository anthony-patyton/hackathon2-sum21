5.times do
  job = Job.create(
    title: Faker::ProgrammingLanguage.name,
    company: Faker::ProgrammingLanguage.creator,
    title_desc: Faker::Subscription.payment_method,
    link_url: Faker::Address.country,
    end_date: Faker::Time.between(from: 2.days.ago, to: Time.now)
  )
  3.times do
    tracker = Tracker.create(
      job_id: job.id,
      steps_taken: Faker::Computer.platform,
      applied_status: Faker::Boolean.boolean,
      interview_date: Faker::Time.between(from: 2.days.ago, to: Time.now),
      follow_up: Faker::Time.between(from: 2.days.ago, to: Time.now),
    )
    1.times do
      Reflection.create(
        tracker_id: tracker.id,
        summary: Faker::ChuckNorris.fact,
        did_right: Faker::ChuckNorris.fact,
        do_better: Faker::ChuckNorris.fact
      )
    end
  end
end
  
puts "Data seeded"