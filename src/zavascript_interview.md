# why do we use redis?
we understand that cahe and caching is important foe the high speed retrivel of data. Redis is a database and caching solution. it could be used with a web applicaton or Restful api app for storing some data fast retrieval on client request.

# what is meant by cahe and caching?
easy accessibility or fast access to things is crucial. it boosts performance. it saves time.

Caching (pronounced “cashing”) is the process of storing data in a cache. A cache is a temporary storage area. For example, the files you automatically request by looking at a Web page are stored on your hard disk in a cache subdirectory under the directory for your browser.

# what is meant by a baucket?
a bucket is storage facility.like in our homes we have buckets to stare water and use the water as when when needed.
similarly, aws provides a simple storage solution - the s3 service. A bucket then can have multiple files stored as an object with file data + file metadata.


# what is aws
Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions.

AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.

# can we upload image without using aws s3 in database? what are the benefits of using s3 instead?
yes, absolutely, before s3 came into the market we did have other ways of storing imagesa couple of ways to store data :
1. store images as blob (raw binary data) in database colomn (RDMS blob type, MONGODB Binary type).
2. store image as base64 string in database colomn.

benift of s3 : 
    1. Budget-friendly
    2. High scalability
    3. Durability
    4. High availability
    5. Security
    6. Easy to manage
<!-- 1. S3 stands for “Simple Storage Service.” As the name suggests, S3 is a service provided by AWS for simplified storage. -->
   1. Budget-friendly : Amazon provides services based on a pay-as-you-go model. This allows us to pay only for the amount of storage and the time that we use on S3
    2. High scalability : Scalability is the measure to increase or decrease the resource as per need.

    For example, you went to buy 2 chocolates from a shop, one for yourself and one for your brother. Now, when you reach home, you see that five more of your cousins have arrived. What do you do now? Obviously, sharing 2 chocolates among 7 people would not be a good idea. A better option is to buy more chocolates. Scalability in this context will mean how easily you can get more chocolates in an acceptable time.
    3. Durability : Durability is the measurement of the likelihood of data loss.
    All the services provided by Amazon, including Amazon S3, are highly durable.
    4. High availability : Availability is the measure of how readily a service can be used.
    For example, we want to eat a pizza from a chain of pizza restaurants. In order to proceed with the pizza order, one of the pizza chain’s restaurants must be available somewhere nearby. To ensure the high availability of its products, Dominos has set up its shops in innumerable numbers across various cities, states, and countries.
    5. Security : When it comes to storage, the security of our data becomes the first priority. S3 relieves us by enabling automatic encryption of data as soon as the data uploading process is finished.
    6. Easy to manage : The AWS Management Console is user-friendly. We can manage our resources in various ways.
      1. GUI (Graphical User Interface)
      2. CLI (Command Line Interface)
      3. API (Application Program Interface)







# Why S3?

    Fully managed object-based storage device
    Most used storage device
    Satisfies a variety of use cases
    Integrates with many other AWS services
    Highly available and durable
    Highly cost-effective
    Widely and easily accessible
    Unlimited storage capabilities
    Highly scalable
    The smallest file size supported is 0 bytes
    The largest file size supported is 5 terabytes
    Objects are created in specific regions that can be chosen at the time of the creation
    S3 replicates the data in various availability zones present in the region of their choice
    S3 offers storage for any kind of data including, but not limited to, video, audio, and text
    Offers object durability of “99.99999999999%”
    Offers high object availability

