#include<iostream>
#include<vector>
#include<utility>
#include <climits>
using namespace std;


class StringClass{

  private:
    string str;
    string substr;
    int strLen,substrLen;
  public:

    void initialiseData()
    {
      cout << "Enter str: ";
      cin >> str;

      cout << "Enter substr: ";
      cin >> substr;

      strLen = str.size();
      substrLen = substr.size();
    }

    void checkMatch()
    {
      int matchCount = 0;
      bool isFound = false,notFound = false;

      for(int i=0;i<=strLen-substrLen;i++)
      {
        if(str[i] == substr[0])
        {
          for(int j=0;j<substrLen;j++)
          {
            if(str[i+j] != substr[j])
            {
              notFound = true;
              break;
            }
          }

          if(!notFound)
          {
            matchCount++;
            cout << "Match found substr " << substr << endl;
            notFound = false;
            isFound = true;
          }
        }
      }

      if(!isFound)
      {
        cout << "Match not found" << endl;
      }
      else{
        cout << "no of matches: " << matchCount << endl;
      }
      
      
    }

    void reverseAndMatch()
    {
      bool isFound = false,notFound = false;
      int k = 0;

      for(int i=0;i<=strLen-substrLen;i++)
      {
        if(str[i] == substr[substrLen-1])
        {
          for(int j=substrLen-1;j>=0;j--)
          {
            if(str[i+k] != substr[j])
            {
              notFound = true;
              break;
            }
            k++;
          }

          if(!notFound)
          {
            cout << "Match found substr " << substr << endl;
            notFound = false;
            isFound = true;
          }
        }
      }

      if(!isFound)
      {
        cout << " match not found" << endl;
      }
    }


    void skipAndMatch()
    {
      int skipper = 0;
      int len = strLen - substrLen;
      bool isFound = false,notFound = false;

      for(int i=0;i<=len;i++)
      {
        if(str[i] == substr[0])
        {
          for(int j=0;j<substrLen;j++)
          {
            if(str[i+j+skipper] != substr[j])
            {
              cout << str[i+j+skipper] << " ";
              notFound = true;
              break;
            }
            skipper++;
          }

          if(!notFound)
          {
            cout << "Match found substr " << substr << endl;
            notFound = false;
            isFound = true;
            break;
          }
        
       }
      }

      if(!isFound)
      {
        cout << "Match not found" << endl;
      }
    }


    void multipleSkipMatch()
    {
      
      bool isFound = false,notFound = false;

      for(int i=0;i<=strLen-substrLen;i++)
      {
       
        if(str[i] == substr[0])
        {
           int k = i;
          int skipper = 1;
          for(int j=0;j<substrLen;j++)
          {
            skipper += 1;
            if(str[k] != substr[j])
            {
              notFound = true;
              break;
            }
            k += skipper;
          }

          if(!notFound)
          {
            cout << "Match found substr " << substr << endl;
            notFound = false;
            isFound = true;
          }
        }
      }

      if(!isFound)
      {
        cout << "Match not found" << endl;
      }

    }

    void longestSubstr()
    {
      int k = 0;
      int max = INT_MIN;
      string ans = "";
      string dummy = "";

      for(int i=0;i<strLen-1;i++)
      {
        for(int j=i+1;j<strLen;j++)
        {
          k = 0;
          dummy = "";
          if(str[i] == str[j])
          {
            while(str[i+k] == str[j+k])
            {
              dummy += str[i+k];
              k++;
            }

            if(k > max)
            {
              ans = dummy;
              max = k;
            }
          }
        }
      }

      cout << "longest common substr: " << ans << endl;

    }
};


int main()
{
  StringClass s;
  s.initialiseData();
  // s.checkMatch();
  // s.reverseAndMatch();
  // s.skipAndMatch();
  s.multipleSkipMatch();
  // s.longestSubstr();
}